import React from 'react';
import ReactPlayer from 'react-player';
import './message.css'

function Message({username, message}) {
    const isUser = username && username.displayName === message.username ;
    console.log(message.message, message.message.substring(0,4).toLowerCase() );
    return (
        <div className={isUser ? "message__align" : ' '}>
            {message.video && <div className={isUser ? 'message__video__user' : "message__video"}>
                <ReactPlayer width="50%" controls url={message.video}/>
                </div>}
            {message.pdf && <a href={message.pdf}  download>
                <button className={isUser ? "message__document" : "message__document__notuser"}>{message.pdf}</button></a>}
             {message.audio ? <div className={isUser ? "message__video__user " : "message__img"} > 
             <audio controls style={{width: "50%"}}>
                    <source src={message.audio}  ></source>
                 </audio>
             </div> : null}
                 {message.avatar && <div className={isUser ? "message__img__user" : 'message__img'} >
                    <img style={{width: "50%"}} src={message.avatar}/>
                     </div>}
            {message.message && <div>
                {message.message.substring(0,5).toLowerCase() === "https" ? <a href={message.message} target="_blank" className={isUser ? "message__text card" : 'card '}>{message.message}</a> : <button className={isUser ? "message__text card" : 'card '}>    
            {message.message}</button>}
            </div> }
        </div>
    )
}

export default Message;
