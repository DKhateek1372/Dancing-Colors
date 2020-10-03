/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { Empty } from 'antd';
import Searchbar from '../components/UiSearch/index';
import utils from '../utils/index';
import '../styles/index.css';
import 'antd/dist/antd.css'
import { values } from 'lodash';


const nested  = {
  a: {
      1:  2,
      b:  'c',
      c: [1, 2, 3]
  },
  b: [1, 3, {a: 2, b: 4, c: 5}, [5,6]],
}

const eq = [1,2,4,5,2];

const colorCombo = (props) => {

  const [search, setSearchState] = React.useState('');
  const [color, setColor ] = React.useState(null);
  const [colorBucket, setColorBucket] = React.useState([]);

  const bookSearchHandler = (e) => {
    setSearchState(e.target.value);
  }

  // const generateColor = () => {
  //   let colorList = [];
  //   for (var i = 0; i < search; i++) {
  //     var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
  //     colorList.push(randomColor);
  //     setColorBucket(colorList);
  //   }
  // };
  const selectedColor = (color) =>{
    setColor(color);
  }





  

  const nested  = {
    a: {
        1:  2,
        b:  'c',
        c: [1, 2, 3]
    },
    b: [1, 3, {a: 2, b: 4, c: 5}, [5,6]],
  }



const generateColor = ( e )=>{
  let arr = []
  Object.keys(nested).map((key, index)=>{
    Object.values(nested).map((value, i)=>{
       Object.values(value).map((yu, i)=>{
          if(Array.isArray(yu)){
             
             const myValue1 = key + '_' +  value + '_' + yu[i];
             arr.push(myValue1)
          }
          else if(typeof(yu) === 'object') {
            Object.keys(yu).map((keys,ki) =>{
              Object.values(yu).map((value,ki) =>{
                const myValue2 = key + '_' +  value + '_' + keys + '_' + value;
                arr.push(myValue2)
             })
            })
          }
          else if(typeof(yu) === 'string'){
            const myValue3 =  key + '_' +  value + '_' + yu;
            arr.push(myValue3);
          }

        })
      }) 
  })
}

const clearAll = (e) =>{
  console.log("@08734534534534",eq, (eq.length+1)/2);
  const mid = (eq.length+1)/2;
  for (let i = 0; i < eq.length; i++){
     let index = eq.indexOf(mid);
    }
}

  return (
    <Container fluid>
      <Row>
        <Col lg={12}>
          <Col className="text-hn-orange items-center justify-between">
            <h1 className="text-3xl">Cogknit Task</h1>{' '}
            <hr className="border mtl-6"></hr>
          </Col>
          <Col lg={12} md={12} className="p-4 flex parent marginBooks" >
            <Col lg={6} md={6} className="width50">
              <h1 className="text-3xl">Palette</h1>{' '}
              <div className="parent flex">
                {
                  colorBucket.length> 0 ? 
                  colorBucket.map((color, index) =>(
                    <div key={index} className="colorList" onClick={()=> selectedColor(color)} style={{backgroundColor: `${color}`}}></div>
                  )):
                  (
                    <Col lg={12} md={12} className="p-4 inFlex parent marginAuto" >
                      <Empty />
                    </Col>
                  )
                }
              </div>
            </Col>
            <Col lg={6} md={6} className="width50">
              <Col lg={12} md={12}>
                <Searchbar bookSearchHandler={bookSearchHandler} searchBar={search} generateColor={generateColor} clearAll={clearAll}/>
               
              </Col>
              <Col lg={12} md={12}>
                <h1 className="text-3xl">Selected Color</h1>{' '}
                <div className="colorPreview" style={{backgroundColor: `${color}`}}>
                </div>
              </Col>
            </Col>
          </Col>
        </Col>
      </Row>
    </Container>
  );
};


export default colorCombo;
