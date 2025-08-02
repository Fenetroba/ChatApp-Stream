import React from 'react'

const MainChat = () => {
  return (
 
      
         <div className="flex flex-col max-sm:mt-10 max-sm:-ml-4 h-[80vh] max-h-[90vh]  max-w-6xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
           {/* Chat Header */}
           <div className="flex items-center justify-between px-6 py-4 bg-[var(--four)] text-white border-b">
             <div className="font-bold text-lg">Chat Room</div>
             <span className="text-xs opacity-80">Online</span>
           </div>
           {/* Chat Messages */}
           <div className="flex-1 overflow-y-auto px-4 py-3 bg-[var(--one)] space-y-3">
             {/* Example messages */}
             <div className="flex flex-col items-start">
               <div className="bg-[var(--two)] text-white px-4 py-2 rounded-2xl max-w-xs text-sm shadow">
                 Hello! 👋 How can I help you today?
               </div>
               <span className="text-xs text-gray-400 mt-1">09:00 AM</span>
             </div>
             <div className="flex flex-col items-end">
               <div className="bg-[var(--three)] text-white px-4 py-2 rounded-2xl max-w-xs text-sm shadow">
                 Hi! I want to know more about your app.
               </div>
               <span className="text-xs text-gray-400 mt-1">09:01 AM</span>
             </div>
             {/* ...more messages */}
           </div>
           {/* Chat Input */}
           <form className="flex items-center gap-2 px-4 py-3 bg-white border-t">
             <input
               type="text"
               placeholder="Type your message..."
               className="flex-1 px-4 py-2 rounded-2xl border outline-none bg-white text-black"
             />
             <button
               type="submit"
               className="bg-[var(--two)] hover:bg-[var(--three)] text-white px-5 py-2 rounded-2xl font-semibold transition-colors"
             >
               Send
             </button>
           </form>
         </div>
   
     

 
  )
}

export default MainChat