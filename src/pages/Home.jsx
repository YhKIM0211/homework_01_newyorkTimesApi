import React, {useState, useEffect} from "react";
import styled from 'styled-components';
import axios from 'axios';
//import { useDispatch, useSelector } from 'react-redux'; 
//import { getNews } from '../reducers/useSlice';
//import { clipNews } from '../reducer/useSlice';

const InputDiv = styled.div`
width: 100vw;
height: 80px;
margin-top : 50px; 


  .header-input-bar {
    display: flex;

    input {
      width: 500px;
      height: 38px;
      margin-right: 12px;
      margin-left : 500px;
    }
    
    button {
      width: 81px;
      height: 38px;
    
      background: #FFFFFF;
      border: 2px solid #5F5F5F;
      border-radius: 4px;
      
      font-size: 16px;
      font-weight: 700;
      line-height: 19px;
    }

  } `;

const ShowAritcleDiv = styled.div` 
  margin: 0 auto;
  width: 800px;
  .card {
    border: 2px solid #5a5a5a;
    a {
      text-decoration: none;
      color: black;
      box-sizing: border-box; 
      margin-bottom: 30px;

      span {
        font-size: 14px;
        font-weight: 600;
        line-height: 17px;
        margin-left: 12px;
        color: #A5A5A5;
      }
      h2 {
        margin-top: 20px;
        font-size: 24px;
        font-weight: 800;
        line-height: 29px;
        text-align: left;
      }
      p {
        margin-top: 20px;
        font-size: 18px;
        font-weight: 500;
        line-height: 22px;
      }
    }
    button {
      margin-top: 7px;
      width: 170px;
      font-size: 1.4rem;
    }
  }
`;

function Home () {

  const [input, setInput] = useState("");
  const [keyword, updateKeyword] = useState("");
  const inputTab = React.useRef(null);

  const [data, setData] = useState({ //검색된 데이터 관리
    data:[]
  });

  //const dispatch = useDispatch();
  //const news = useSelector((state) => state.news);
  //console.log("news",news);

  // useEffect(() => {
  //   const debounce = setTimeout(() => {
  //   if(input) updateKeyword(finKeyword);
  //   },150)
  //   return () => {
  //   clearTimeout(debounce)
  //   }
  // },[keyword])

  const handleClick = () => {
    let finKeyword = input.trim().toUpperCase(); //대소문자 구분X, 공백제거 -> 키워드 변환
  
    if(finKeyword === '') { //키워드 에러 처리
      alert('검색어를 입력해주세요.');
      setInput("");//초기화 -> 없어도되는 코드일까요??
      inputTab.current.value = "";
      inputTab.current.focus();
      return ;
    }
    
    updateKeyword(finKeyword);
    getData(keyword);
  }


  const getData = (keyword) => {
    const fetch = async () => {
      try {
        const res = await axios.get('http://api.nytimes.com/svc/search/v2/articlesearch.json?',{
          params: { //axios공식문서 참조
            q : keyword,
            fl: 'web_url,pub_date,headline,snippet,_id',
            'api-key': 'YFkB8BWzp55lBgvF3GDyxWww7fdL2f6g'
          }
        });
        
        if (res.status !== 200) {  //응답 성공X 에러처리 (ft:팀장님 코드)
          throw new Error("Can't find news");
        }

        console.log("AA",res);
        console.log("jj",res.data.response.docs);//데이터 형태: [{}가 10개] 0-9까지 인덱스

        //dispatch(getNews({newsList: res.data.response.docs}));
        setData({
          data : res.data.response.docs //[{}가 10개]
        });//위의 초기값과 같은 형태로 맞춰준다. 

        // (data.data).map((data) => {
        //   console.log("main",data.headline.main);
        //   console.log("pub_date",data.pub_date);
        //   console.log("snippet",data.snippet);
        //   console.log("web_url",data.web_url);
        //   console.log("_id",data._id);

          
          
        // })

      } catch (error) {
        console.error(error);
      }
    }
    fetch();
  }

  console.log("bb",data);
 

  // const updateData = async() => {
  //   const res = await fetchData();
  //   let b = res.filter((list: ICity) => list.city.includes(keyword) === true)
  //               .slice(0,10);
  //   // console.log(b);
  //   setKeyItems(b);
  // }

  const handleClip = () => {
    alert('저장되었습니다')
  }

  return (
    <>
      <InputDiv>
        <div className="header-input-bar">
            <input type="text" name="input-bar" required
              maxLength="" 
              value={input} 
              onChange={(e) => setInput(e.target.value)}
            />
            <button ref = {inputTab} onClick={handleClick}>Search</button>
        </div>
      </InputDiv>
      <ShowAritcleDiv>
        { 
          (data.data).map((data) => {
            console.log(data);
            return (
              <>
                <div className="card">
                  <a key={data._id} href={data.web_url} className="card-article">
                    <span className="date">{data.pub_date.substr(0,10)}</span>
                    <h2 className="card-title">{data.headline.main}</h2>
                    <p className="content">{data.snippet}</p>
                  </a>
                  <button onClick={handleClip}>Clip</button>
                </div>
              </>
            );
          })
        }
      </ShowAritcleDiv>
    </>
  );
};

export default Home;