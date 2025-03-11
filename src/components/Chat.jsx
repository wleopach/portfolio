import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';

const theme = {
  background: '#f5f5f5',
  headerBgColor: '#666',
  headerFontColor: '#fff',
  headerFontSize: '15px',
  botBubbleColor: '#666',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a',
};


const Chat = () => {
    return (
      <ThemeProvider theme={theme}>

<ChatBot
  steps={[
    {
      id: '1',
      message: 'What is your name?',
      trigger: '2',
    },
    {
      id: '2',
      user: true,
      trigger: '3',
    },
    {
      id: '3',
      message: 'Hi {previousValue}, nice to meet you!',
      end: true,
    },
  ]}
/></ThemeProvider>
)}

export default Chat;