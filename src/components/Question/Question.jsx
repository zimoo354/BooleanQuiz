import React from 'react';
import { Row, Col, Button } from 'antd';

const Question = ({ text, onChange, answers }) => {
  return (
    <>
      <Row>
        <Col span={24}>
          <p>{text ? text : "Finished!"}</p>
        </Col>
        {
          text && (
            <>
              <Col span={12}>
                <Button size="large" type="primary" onClick={() => onChange(true)}>True</Button>
              </Col>
              <Col span={12}>
                <Button size="large" type="danger" onClick={() => onChange(false)}>False</Button>
              </Col>
            </>
          )
        }
      </Row>        
    </>
  )
}
  
export default Question;