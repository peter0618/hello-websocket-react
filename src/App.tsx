import React, { useState } from 'react';
import './App.css';
import styled from 'styled-components';
import * as socketio from 'socket.io-client';
import { Route } from 'react-router-dom';
import { ChatRoomList, Login } from './components/templates/index';

const StyledComponent = styled.div`
  // background: #fafafa;
`;
const socket = socketio.connect('http://peterchat.duckdns.org:8080/');
socket.on('connect', () => {
  console.log('socket connected');
  socket.emit('SAY_HI', { nickName: 'test', roomId: '12' });
});

socket.on('SAY_HI', function (data) {
  const { nickName, attendants, datetime } = data;
  console.log(data);
});

socket.on('CHAT', function (data) {
  console.log('chat', data);
});
function App() {
  return (
    <div>
      <Route exact path="/" component={Login} />
      <Route exact path="/chat-room-list" component={ChatRoomList} />
    </div>
  );
}

export default App;
