import logo from './logo.svg';
import './App.css';
import styles from "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  ConversationHeader,
  Avatar,
  VoiceCallButton,
  VideoCallButton,
  InfoButton,
} from "@chatscope/chat-ui-kit-react";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import jsonData from './data.json';

function App() {
  const [messages, setMessages] = useState([]);
  /* useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://www.dev.readychatai.com/messages_json');
        setMessages(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);*/
  useEffect(() => {
    // Set the data from the JSON file when the component mounts
    setMessages(jsonData);
  }, []);
  return (
    <div style={{ position: "relative", height: "500px" }}>
      <MainContainer>
        <ChatContainer>
          <ConversationHeader>
            <Avatar
              name="Emily"
              src="https://chatscope.io/storybook/react/assets/emily-xzL8sDL2.svg"
            />
            <ConversationHeader.Content
              info="Active 10 mins ago"
              userName="bot"
            />
            <ConversationHeader.Actions>
              <VoiceCallButton />
              <VideoCallButton />
              <InfoButton />
            </ConversationHeader.Actions>
          </ConversationHeader>
          <MessageList>
              {messages.map((message) => (
                <Message
                model={{
                  direction: message.bot_sender,
                  message: message.message_text,
                  sentTime: message.message_date,
                  sender: message.sender_name,
                }}
              />
              ))}
          </MessageList>
          <MessageInput placeholder="Type message here" />
        </ChatContainer>
      </MainContainer>
    </div>
  );
}

export default App;
