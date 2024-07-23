import { useEffect, useState } from 'react';
import axios from 'axios';

import Modal from "./components/Modal";
import ReModal from "./components/ReModal";
import './App.css';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [reModalOpen, setReModalOpen] = useState(false);
  const [memos, setMemos] = useState([]);
  const [memoID, setMemoID] = useState(0);
  const [clickmemo, setClickmemo] = useState({
    title: "",
    content: "",
    index: 0,
  });

  const callApi = async () => {
    await axios.get("http://localhost:8000/posts")
      .then((res)=>{
        console.log("res.data :",res.data);
        setMemos(res.data.data);
        setMemoID(res.data.data.length);
      })
  };

  useEffect(()=>{
    callApi();
  }, []);

  //새 모달창 열기
  const openModal = () => {
    setIsModalOpen(true);
  };

  //새 모달창 닫기
  const closeModal = () => {
    setIsModalOpen(false);
  };

  //기존 모달창 열기
  const reopenModal = (index) => {
    setReModalOpen(true);
    setClickmemo({
      index: memos[index].id,
      title: memos[index].title,
      content: memos[index].content,
    });
  };

  //기존 모달창 닫기
  const recloseModal = () => {
    setReModalOpen(false);
    window.location.reload();
  };

  return (
    <div className='container'>
      <div className='App'>

        <h1>메모장</h1>
        <br/>
        <table>
          <tr className="trList">
            {memos && memos.map((memo, index) => (
              <td className='cell' key={index} onClick={() => reopenModal(index)}>
                <div className='inner'>
                  <h3>{index+1}</h3>
                  <h2>{memo.title}</h2>
                  <h4>{memo.content}</h4>
                </div> 
              </td>
            ))}

            <td className='cell'>
              <div className='inner' onClick={openModal}>
                <button>버튼</button>
              </div>
            </td>
          </tr>
        </table>

        <main>
          <Modal isOpen={isModalOpen} close={closeModal} memoID={memoID}/>
          <ReModal
            reOpen={reModalOpen}
            reclose={recloseModal}
            data={{ ...clickmemo }} //딥카피
            //onUpdate={handleUpdate}
            //onRemove={handleRemove}
            memoID={memoID}
          />
        </main>

      </div>
    </div>
    
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
