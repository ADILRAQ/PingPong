// import Head from "next/head";
import { RiSendPlaneFill } from "react-icons/ri";
import { use, useEffect, useState } from "react";
import Image from "next/image";
import { chatData } from "./Dto/Dto";
import { Input } from "postcss";
import { number } from "yup";
import axios from "axios";



const Header = () =>{
    return(
        <div className="chatheader">
            <Image src="./homeImages/chat.svg" alt="logo" width={19} height={17}/>
            <h2>General Chat</h2>
        </div>
    );
}

const Memebers = ()=>{
    return (
        <>
        <hr className="line"></hr>
        <div className="chatmembers">

            <div className="text">
                <p className="sentence">Chat Members:</p>
                <p className="number">50</p>
            </div>

            <div className="profiles">
                <Image className="profilepic" src="./homeImages/memeber1.svg" alt="member" width={35} height={35}/>
                <Image className="profilepic" src="./homeImages/memeber1.svg" alt="member" width={35} height={35}/>
                <Image className="profilepic" src="./homeImages/memeber1.svg" alt="member" width={35} height={35}/>
            </div>
        </div>
        </>
    );
}

interface userOptionClass{
    className: string;
}

const UserOption = ( { className }: userOptionClass ) => {
    return (
        <div  className={`userOption ${className}`}>
            <div className="block">
                <Image className="optionlogo" src="./homeImages/chat.svg" alt="logo" width={19} height={17}/>
                <p>Block</p>
            </div>
            <hr className="liney"></hr>
            <div className="clash">
                <Image className="optionlogo" src="./homeImages/chat.svg" alt="logo" width={19} height={17}/>
                <p>Clash</p>
            </div>
        </div>
    );
}
type Props = {
    handleMsgClick: (value:number) => void;
    user : chatData;
};
const More = ({user}: chatData)=> {

    const [showMsgOption, setShowMsgOption] = useState(false);

    const handleMsgOption = () => {
      setShowMsgOption(!showMsgOption);
    };

    return (
        <div className="more">
            <Image className="dots" onClick={handleMsgOption} src="./homeImages/dots.svg" alt="member" width={16} height={16}/>
            <UserOption className={showMsgOption ? '' : 'invisible'} />
            <p className="date">hh</p>
        </div>
    );
}



const Message = ({handleMsgClick, user} : Props) =>{
    const handleClick = ()=>{
        handleMsgClick(1);
    }
    return (
        <div className="Message">

            <div className="chatData" onClick={()=>{handleMsgClick(1)}}>
                <div className="picture">
                    <Image className="profilepic" src="./homeImages/memeber1.svg" alt="member" width={48} height={40}/>
                </div>

                <div className="messageInfo">
                    <h2 className="sendeName">{user.userName}</h2>
                    <p className="msg" >{user.lastMessage.length < 30 ? user.lastMessage : user.lastMessage.slice(0, 30) + "..."}</p>
                </div>
            </div>

           <More user={user}/>

        </div>
    );
}

const Conversation = ({handleMsgClick}: Props) =>{
    const handleClick = ()=>{
        handleMsgClick(0);
    }
    return (
        <div className="conversation">
            <div className="convo">
                <div className="convoHeader">
                    <div className="sender-info">
                        <Image src="./homeImages/memeber1.svg" width={38} height={42} alt="photo"/>
                        <h2>Username</h2>
                    </div>
                    <Image className="go-back" src="./homeImages/goback.svg" onClick={handleClick} width={28} height={25} alt="back" />
                </div>
                <hr />

                <div className="convoHolder">
                    <div className="myMsg">
                        <p>hello there from youssef sahih i want to try if the width and height fit perfectly and yes did they do;</p>
                    </div>
                    <div className="othersMsg">
                        <p>hi, thank you</p>
                    </div>
                    <div className="myMsg">
                        <p>hello there;</p>
                    </div>
                    <div className="othersMsg">
                        <p>hi, thank you</p>
                    </div>
                    <div className="myMsg">
                        <p>hello there;</p>
                    </div>
                    <div className="othersMsg">
                        <p>hi, thank you</p>
                    </div>
                    <div className="myMsg">
                        <p>hello there;</p>
                    </div>
                    <div className="othersMsg">
                        <p>hi, thank you</p>
                    </div>
                    <div className="myMsg">
                        <p>hello there;</p>
                    </div>
                    <div className="othersMsg">
                        <p>hi, thank you</p>
                    </div>
                    <div className="myMsg">
                        <p>hello there;</p>
                    </div>
                    <div className="othersMsg">
                        <p>hi, thank you</p>
                    </div>
                    <div className="myMsg">
                        <p>hello there;</p>
                    </div>
                    <div className="othersMsg">
                        <p>hi, thank you</p>
                    </div>
                    <div className="myMsg">
                        <p>hello there;</p>
                    </div>
                    <div className="othersMsg">
                        <p>hi, thank you</p>
                    </div>
                    <div className="myMsg">
                        <p>hello there;</p>
                    </div>
                    <div className="othersMsg">
                        <p>hi, thank you</p>
                    </div>
                    <div className="myMsg">
                        <p>hello there;</p>
                    </div>
                    <div className="othersMsg">
                        <p>hi, thank you</p>
                    </div>
                    <div className="myMsg">
                        <p>hello there;</p>
                    </div>
                    <div className="othersMsg">
                        <p>hi, thank you</p>
                    </div>
                    <div className="myMsg">
                        <p>hello there;</p>
                    </div>
                    <div className="othersMsg">
                        <p>hi, thank you</p>
                    </div>
                    <div className="myMsg">
                        <p>hello there;</p>
                    </div>
                    <div className="othersMsg">
                        <p>hi, thank you</p>
                    </div>
                    <div className="myMsg">
                        <p>hello there;</p>
                    </div>
                    <div className="othersMsg">
                        <p>hi, thank you</p>
                    </div>
                    <div className="myMsg">
                        <p>hello there;</p>
                    </div>
                    <div className="othersMsg">
                        <p>hi, thank you</p>
                    </div>
                    <div className="myMsg">
                        <p>hello there;</p>
                    </div>
                    <div className="othersMsg">
                        <p>hi, thank you</p>
                    </div>
                    <div className="myMsg">
                        <p>hello there;</p>
                    </div>
                    <div className="othersMsg">
                        <p>hi, thank you</p>
                    </div>
                    <div className="myMsg">
                        <p>hello there;</p>
                    </div>
                    <div className="othersMsg">
                        <p>hi, thank you</p>
                    </div>
                    <div className="myMsg">
                        <p>hello there;</p>
                    </div>
                    <div className="othersMsg">
                        <p>hi, thank you</p>
                    </div>
                    <div className="myMsg">
                        <p>hello there;</p>
                    </div>
                    <div className="othersMsg">
                        <p>hi, thank you</p>
                    </div>
                    <div className="myMsg">
                        <p>hello there;</p>
                    </div>
                    <div className="othersMsg">
                        <p>hi, thank you</p>
                    </div>
                    <div className="myMsg">
                        <p>hello there;</p>
                    </div>
                    <div className="othersMsg">
                        <p>hi, thank you</p>
                    </div>
                    <div className="myMsg">
                        <p>hello there;</p>
                    </div>
                    <div className="othersMsg">
                        <p>hi, thank you</p>
                    </div>
                    <div className="myMsg">
                        <p>hello there;</p>
                    </div>
                    <div className="othersMsg">
                        <p>hi, thank you</p>
                    </div>
                    <div className="myMsg">
                        <p>hello there;</p>
                    </div>
                    <div className="othersMsg">
                        <p>hi, thank you</p>
                    </div>
                    <div className="myMsg">
                        <p>hello there;</p>
                    </div>
                    <div className="othersMsg">
                        <p>hi, thank you</p>
                    </div>
                    <div className="myMsg">
                        <p>hello there;</p>
                    </div>
                    <div className="othersMsg">
                        <p>hi, thank you</p>
                    </div>
                    <div className="myMsg">
                        <p>hello there;</p>
                    </div>
                    <div className="othersMsg">
                        <p>hi, thank you</p>
                    </div>
                    <div className="myMsg">
                        <p>finish</p>
                    </div>
                    {/* <div className="othersMsg">
                        <p>hi, thank you</p>
                    </div> */}
                </div>
            </div>
            <div className="input-footer">
                <textarea className="convoInput" placeholder="Send a Message..."/>
                <RiSendPlaneFill className="sendLogo"/>
            </div>
        </div>
    );
}
// const ChatChat = ()=>{
//     return (
//         <div className="">
//             <div className="chatbar">
//                 <Header/>
//                 <Memebers/>
//             </div>
//              <div className="messagesHolder">
//                 <Message />
//             </div> 
//         </div>
//     );
// }


const Chat = () => {
    
    //TODO: fetch HTTP chat data;
    //(after getting the data, it should be mapped in as messages)//
    //(then we should listen for 2 events: *online and *newMessage) //
    //firts we add new messages recieved on the socket to the Message map//

    const [chatdata, setChatdata] = useState<chatData[] | null >(null);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get('http://127.0.0.1:5501/json.json');
            setChatdata(response.data);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };

        fetchData();
        
    }, []);
    const [ShowConvo, setShowConvo]  = useState(0);
    const handleMsgClick = (value:number)=>{
        setShowConvo(value);
    }
    if(chatdata)
        console.log(chatdata);
   
    return (
        <div className="chat">
            {ShowConvo === 0 && <div className="">
                <div className="chatbar">
                    <Header/>
                    <Memebers/>
                </div>
                 {/* <div className="messagesHolder">
                    <Message handleMsgClick={handleMsgClick}/>
                </div>  */}
                <div className="messagesHolder">
                    {chatdata?.map((user) => (
                    <Message handleMsgClick={handleMsgClick} user={user} />
                 ))}
                 </div>
            </div>}
            {ShowConvo === 1 && <Conversation  user={null} handleMsgClick={handleMsgClick}/>}
            
        </div>
    );
}

export default Chat