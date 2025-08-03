import User from "../models/Auth.model.js";
import Friends from "../models/Friends.js";

export const RecommendedUsers = async (req, res) => {
  try {
    const CurrentUserId = req.UserOne._id; // Use correct property
    const user = req.UserOne;
    // console.log(user);

    const recommendedUsers = await User.find({
      _id: { $ne: CurrentUserId, $nin: user.friends || [] }, // Corrected query
      isOnboarded: false,
    })
      .select('-password -__v')
      .limit(10);

    res.status(200).json({
      success: true,
      recommendedUsers,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Internal Server Error',
    });
    console.log(error.message);
  }
};
export const FriendsList = async (req, res) => {
    try {
        const CurrentUserId = req.UserOne._id;
        const user = await User.findById(CurrentUserId).select('friends').populate('friends', 'Fullname profilePic nativeLanguage learningLanguage location isOnboarded').lean(); // Populate friends with specific fields;
        res.status(200).json({
            success: true,
            friends: user.friends
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Internal Server Error'
        });
    }
}
export const RequestFriend = async (req, res) => {
    try {
        const CurrentUserId = req.UserOne._id;
 
        const { friendId } = req.params;
       console.log(friendId)
            // Validate the friendId
            if(CurrentUserId === friendId) {
                return res.status(400).json({
                    success: false,
                    message: 'You cannot send a friend request to yourself'
                });
            }
            // Check if the friend exists
            const friend = await User.findById(friendId);
            if (!friend) {
                return res.status(404).json({
                    success: false,
                    message: 'Friend not found'
                });
            }
            // Check if the user is already friends
               const isAlreadyFriends = await User.findOne({
                    _id: CurrentUserId,
                    friends: friendId
               });
            if (isAlreadyFriends) { 
                    return res.status(400).json({
                         success: false,
                         message: 'You are already friends with this user'
                    });
            }

        // Check if the friend request already exists
        const existingRequest = await Friends.findOne({
         $or: [ 
            { sender: CurrentUserId, receiver: friendId },
            { sender: friendId, receiver: CurrentUserId }
        ]
     });

        if (existingRequest) {
            return res.status(400).json({
                success: false,
                message: 'Friend request already sent'
            });
        }

        // Create a new friend request
        const newRequest = await Friends.create({
            sender: CurrentUserId,
            receiver: friendId,
            status: 'pending'
        });

        res.status(201).json({
            success: true,
            message: 'Friend request sent successfully',
            request: newRequest
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Internal Server Error'
        });
    }
}
export const RequestFriend_accept = async (req, res) => {
    try {
        const CurrentUserId = req.UserOne._id;
        const { friendId } = req.params;

        // Validate the friendId
        if (CurrentUserId.toString() === friendId) {
            return res.status(400).json({
                success: false,
                message: 'You cannot accept a friend request from yourself'
            });
        }

        // Check if the friend request exists
        const friendRequest = await Friends.findOne({
            $or: [
                { sender: friendId, receiver: CurrentUserId },
                { sender: CurrentUserId, receiver: friendId }
            ],
            status: 'pending'
        });

        if (!friendRequest) {
            return res.status(404).json({
                success: false,
                message: 'Friend request not found'
            });
        }

        // Accept the friend request
        friendRequest.status = 'accepted';
        await friendRequest.save();

        // Add each other to friends list
        await User.findByIdAndUpdate(CurrentUserId, { $addToSet: { friends: friendId } });
        await User.findByIdAndUpdate(friendId, { $addToSet: { friends: CurrentUserId } });

        res.status(200).json({
            success: true,
            message: 'Friend request accepted successfully'
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: 'Internal Server Error'
        });
    }
}


export const FriendsRequest=async (req, res) => {
try {
    const IncomeRequest=await Friends.find({
        sender:req.userOne.id,
        status:"pending",

    }).populate("sender","Fullname profilepic nativelanguage learninglanguage")

    const acceptedReq=await Friends.find({
        sender:req.userOne.id,
        status:'accepted'
    }).populate('receiver','Fullname bio ')

    return res.status(200).json({
        success: true,
        data: {
            IncomeRequest,
            acceptedReq
        }
    });
} catch (error) {
     return res.status(500).json({
        success: false,
        message: 'Internal Server Error'
    });
}
}
export const getOutGoingReq=async(req,res)=>{

    try {
        const ReqOutGo=await Friends.find({
            sender:req.userOne.id,
            status:"pending"
        }).populate("sender","Fullname profilepic nativelanguage learninglanguage ")

        return res.status(200).json({success:true, ReqOutGo})
    } catch (error) {
       return res.status(500).json({
            success: false,
            message: 'Internal Server Error'
        });
    }
}