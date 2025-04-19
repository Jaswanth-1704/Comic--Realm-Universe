import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Search,
  Edit,
  Phone,
  Video,
  Info,
  Image,
  Smile,
  Send,
  MoreHorizontal,
  ChevronRight,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Sidebar from "@/components/Sidebar";

// Mock conversation data
const conversations = [
  {
    id: 1,
    user: {
      name: "Peter Parker",
      username: "spideyparker",
      avatar: "https://i.pravatar.cc/150?img=21",
    },
    lastMessage: "Have you seen the new Spider-Verse movie?",
    time: "5m",
    unread: 3,
    online: true,
  },
  {
    id: 2,
    user: {
      name: "Tony Stark",
      username: "ironmanstark",
      avatar: "https://i.pravatar.cc/150?img=22",
    },
    lastMessage: "This new Iron Man suit design is incredible!",
    time: "1h",
    unread: 0,
    online: true,
  },
  {
    id: 3,
    user: {
      name: "Diana Prince",
      username: "wonderwoman",
      avatar: "https://i.pravatar.cc/150?img=23",
    },
    lastMessage: "Thanks for sharing that Wonder Woman comic",
    time: "2h",
    unread: 0,
    online: false,
  },
  {
    id: 4,
    user: {
      name: "Bruce Wayne",
      username: "batman",
      avatar: "https://i.pravatar.cc/150?img=24",
    },
    lastMessage: "Did you read the latest Batman issue?",
    time: "1d",
    unread: 1,
    online: false,
  },
  {
    id: 5,
    user: {
      name: "Superhero Club",
      username: "superheroclub",
      avatar: "https://i.pravatar.cc/150?img=25",
    },
    lastMessage: "Thor: When's the next comic convention?",
    time: "2d",
    unread: 0,
    online: false,
    isGroup: true,
    members: 15,
  },
];

// Mock messages for selected conversation
const mockMessages = [
  {
    id: 1,
    sender: "them",
    text: "Hey! Did you see the latest Batman comic?",
    time: "10:05 AM",
  },
  {
    id: 2,
    sender: "me",
    text: "Not yet! No spoilers please ",
    time: "10:07 AM",
  },
  {
    id: 3,
    sender: "them",
    text: "Don't worry! But the Joker's plan is mind-blowing!",
    time: "10:08 AM",
  },
  {
    id: 4,
    sender: "me",
    text: "Can't wait to read it tonight!",
    time: "10:10 AM",
  },
  {
    id: 5,
    sender: "them",
    text: "The artwork in this issue is spectacular. Jim Lee outdid himself.",
    time: "10:12 AM",
  },
  {
    id: 6,
    sender: "them",
    text: "Check out this panel (no spoilers)",
    time: "10:13 AM",
    image: "https://picsum.photos/300/200?random=100",
  },
  {
    id: 7,
    sender: "me",
    text: "Wow! The Gotham cityscape looks incredible!",
    time: "10:15 AM",
  },
  {
    id: 8,
    sender: "them",
    text: "Have you been following any other DC series lately?",
    time: "10:20 AM",
  },
  {
    id: 9,
    sender: "me",
    text: "I'm reading Superman and Wonder Woman weekly. Also started The Flash recently!",
    time: "10:22 AM",
  },
  {
    id: 10,
    sender: "them",
    text: "The Flash is amazing! The Speed Force scenes are so well drawn.",
    time: "10:25 AM",
  },
  {
    id: 11,
    sender: "them",
    text: "Did you see the latest issue with Reverse Flash?",
    time: "10:35 AM",
  },
];

const Messages = () => {
  const [selectedConversation, setSelectedConversation] = useState(
    conversations[0]
  );
  const [messageText, setMessageText] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const handleSendMessage = () => {
    if (messageText.trim()) {
      console.log("Sending message:", messageText);
      setMessageText("");
    }
  };

  return (
    <div className="flex min-h-screen bg-background dark:bg-gray-950">
      <Sidebar />
      <div className="flex-1 flex flex-col md:flex-row pb-16 md:pb-0">
        {/* Conversation List as a collapsible drawer on the left for desktop, top for mobile */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, type: 'spring', bounce: 0.2 }}
          className="md:w-1/3 w-full md:max-w-sm h-80 md:h-auto bg-white dark:bg-gradient-to-b dark:from-[#23272f] dark:to-[#181a20] shadow-2xl rounded-b-3xl md:rounded-b-none md:rounded-l-3xl z-10 flex flex-col overflow-hidden"
        >
          <div className="flex items-center justify-between p-4 border-b border-gray-700">
            <h1 className="text-xl font-['Bangers'] tracking-wide text-black dark:text-white">Chats</h1>
            <Button className="rounded-full bg-[#FF3860] hover:bg-[#FFD700] text-white hover:text-black shadow-lg transition-all duration-200">
              <Edit size={18} />
            </Button>
          </div>
          <div className="flex-1 overflow-y-auto">
            {conversations.map((conversation) => (
              <motion.div
                key={conversation.id}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`flex items-center gap-3 px-4 py-3 cursor-pointer border-b border-gray-200 dark:border-gray-800 transition-all group ${selectedConversation.id === conversation.id ? 'bg-[#FFD700] dark:bg-[#23272f] scale-105 shadow-lg' : 'hover:bg-gray-100 dark:hover:bg-gray-900'}`}
                onClick={() => setSelectedConversation(conversation)}
              >
                <div className="relative">
                  <Avatar className="h-12 w-12 border-2 border-black">
                    <AvatarImage src={conversation.user.avatar} />
                    <AvatarFallback className="bg-[#FFD700] text-black">
                      {conversation.user.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  {conversation.online && (
                    <motion.div
                      className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white dark:border-gray-900"
                      animate={{ scale: [1, 1.3, 1], opacity: [1, 0.7, 1] }}
                      transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
                      style={{ background: '#22c55e' }}
                    />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-center">
                    <h3 className="font-['Comic_Neue'] font-bold truncate text-black dark:text-white dark:font-extrabold">{conversation.user.name}</h3>
                    <span className="text-xs text-gray-500 dark:text-white dark:font-bold">{conversation.time}</span>
                  </div>
                  <p className="text-xs text-gray-700 truncate font-['Comic_Neue'] dark:text-white dark:font-bold">{conversation.lastMessage}</p>
                </div>
                {conversation.unread > 0 && (
                  <Badge className="bg-[#FF3860] h-5 w-5 flex items-center justify-center p-0 rounded-full text-white">
                    {conversation.unread}
                  </Badge>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
        {/* Chat Area */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, type: 'spring', bounce: 0.2 }}
          className="flex-1 flex flex-col bg-gradient-to-br from-[#f3f4f6] to-[#e0e7ef] dark:from-[#23272f] dark:to-[#181a20] rounded-t-3xl md:rounded-t-none md:rounded-r-3xl shadow-2xl mx-2 my-2 p-0 overflow-hidden"
        >
          {/* Chat Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/80">
            <div className="flex items-center gap-3">
              <Avatar className="h-11 w-11 border-2 border-black">
                <AvatarImage src={selectedConversation.user.avatar} />
                <AvatarFallback className="bg-[#FFD700] text-black">
                  {selectedConversation.user.name.charAt(0)}
                </AvatarFallback>
              </Avatar>
              <div>
                <h2 className="font-['Comic_Neue'] font-bold text-lg text-black dark:text-white dark:font-extrabold">{selectedConversation.user.name}</h2>
                <p className="text-xs text-gray-500 dark:text-white dark:font-bold">@{selectedConversation.user.username}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" className="rounded-full h-9 w-9 hover:bg-[#FFD700]/20 transition-colors">
                <Phone size={18} />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full h-9 w-9 hover:bg-[#FFD700]/20 transition-colors">
                <Video size={18} />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full h-9 w-9 hover:bg-[#FFD700]/20 transition-colors">
                <Info size={18} />
              </Button>
            </div>
          </div>
          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-6 py-4 flex flex-col gap-2">
            <motion.div layout className="flex flex-col gap-4">
              {mockMessages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: message.sender === 'me' ? 30 : -30, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ type: 'spring', bounce: 0.3, duration: 0.23 }}
                  className={`flex ${message.sender === 'me' ? 'justify-end' : 'justify-start'}`}
                  layout
                >
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                    className={`max-w-[70%] ${
                      message.sender === 'me'
                        ? 'bg-[#00A7E1] text-white border-2 border-[#00A7E1] rounded-br-2xl'
                        : 'bg-white dark:bg-gray-900 border-2 border-black text-black dark:text-white rounded-bl-2xl'
                    } p-3 rounded-lg shadow-md transition-all duration-150 group relative`}
                  >
                    {message.image && (
                      <div className="mb-2 rounded-md overflow-hidden border border-gray-300 dark:border-gray-700">
                        <img src={message.image} alt="Shared" className="w-full" />
                      </div>
                    )}
                    <p className="font-['Comic_Neue']">{message.text}</p>
                    <motion.div
                      className={`text-xs mt-1 absolute -bottom-5 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 ${
                        message.sender === 'me' ? 'text-white/70' : 'text-gray-500 dark:text-white dark:font-bold'
                      }`}
                    >
                      {message.time}
                    </motion.div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>
          {/* Message Input */}
          <div className="px-6 py-5 border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/80 flex items-center gap-3">
            <Button variant="ghost" size="icon" className="rounded-full h-10 w-10 hover:bg-[#FFD700]/20 transition-colors">
              <Image size={20} />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full h-10 w-10 hover:bg-[#FFD700]/20 transition-colors">
              <Smile size={20} />
            </Button>
            <Input
              type="text"
              placeholder="Type a message..."
              className="border-2 border-black rounded-full h-10 font-['Comic_Neue'] focus:ring-2 focus:ring-[#FFD700] transition-all flex-1"
              value={messageText}
              onChange={(e) => setMessageText(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
            />
            <Button
              className="rounded-full h-10 w-10 bg-[#FF3860] hover:bg-[#FF3860]/80 text-white p-0 scale-100 hover:scale-110 active:scale-95 transition-transform duration-150 shadow-md"
              onClick={handleSendMessage}
            >
              <Send size={18} />
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

interface ConversationItemProps {
  conversation: any;
  isSelected: boolean;
  onClick: () => void;
}

const ConversationItem: React.FC<ConversationItemProps> = ({
  conversation,
  isSelected,
  onClick,
}) => {
  return (
    <motion.div
      className={`p-3 cursor-pointer transition-colors border-b border-gray-200 dark:border-gray-800 group ${
        isSelected ? "bg-[#FFE3EB] dark:bg-[#2e2630] scale-[1.01] shadow-lg" : "hover:bg-gray-100 dark:hover:bg-gray-800 scale-100"
      }`}
      onClick={onClick}
      whileHover={{ scale: 1.015 }}
      whileTap={{ scale: 0.98 }}
      layout
    >
      <div className="flex items-center">
        <div className="relative">
          <Avatar className="h-12 w-12 border-2 border-black">
            <AvatarImage src={conversation.user.avatar} />
            <AvatarFallback className="bg-[#FFD700]">
              {conversation.user.name.charAt(0)}
            </AvatarFallback>
          </Avatar>
          {conversation.online && (
            <motion.div
              className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white dark:border-gray-900"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [1, 0.7, 1],
              }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{ background: conversation.online ? '#22c55e' : '#d1d5db' }}
            />
          )}
        </div>
        <div className="ml-3 flex-1 min-w-0">
          <div className="flex justify-between items-center">
            <h3 className="font-['Comic_Neue'] font-bold truncate text-black dark:text-white dark:font-extrabold">
              {conversation.user.name}
            </h3>
            <span className="text-xs text-gray-500 dark:text-white dark:font-bold">{conversation.time}</span>
          </div>
          <p className="text-sm text-gray-600 truncate font-['Comic_Neue'] dark:text-white dark:font-bold">
            {conversation.lastMessage}
          </p>
        </div>
        <div className="ml-2 flex flex-col items-end">
          {conversation.unread > 0 && (
            <Badge className="bg-[#FF3860] h-5 w-5 flex items-center justify-center p-0 rounded-full">
              {conversation.unread}
            </Badge>
          )}
          <ChevronRight size={16} className="text-gray-400 mt-1" />
        </div>
      </div>
    </motion.div>
  );
};

interface MessageBubbleProps {
  message: any;
}

const MessageBubble: React.FC<MessageBubbleProps> = ({ message }) => {
  const isMe = message.sender === "me";

  return (
    <motion.div
      initial={{ opacity: 0, y: isMe ? 20 : -20, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ type: "spring", bounce: 0.3, duration: 0.23 }}
      className={`flex ${isMe ? "justify-end" : "justify-start"}`}
      layout
    >
      <motion.div
        whileHover={{ scale: 1.025 }}
        whileTap={{ scale: 0.97 }}
        className={`max-w-[75%] ${
          isMe
            ? "bg-[#00A7E1] text-white border-2 border-[#00A7E1] rounded-br-2xl"
            : "bg-white dark:bg-gray-900 border-2 border-black text-black dark:text-white rounded-bl-2xl"
        } p-3 rounded-lg shadow-md transition-all duration-150 group relative`}
      >
        {message.image && (
          <div className="mb-2 rounded-md overflow-hidden border border-gray-300 dark:border-gray-700">
            <img src={message.image} alt="Shared" className="w-full" />
          </div>
        )}
        <p className="font-['Comic_Neue']">{message.text}</p>
        <motion.div
          className={`text-xs mt-1 absolute -bottom-5 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 ${
            isMe ? "text-white/70" : "text-gray-500 dark:text-white dark:font-bold"
          }`}
        >
          {message.time}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Messages;
