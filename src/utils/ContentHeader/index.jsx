import React from 'react';
import { 
    Row,
    Col,
    Card 
} from 'antd';
import { 
    useSelector 
} from 'react-redux';
import './index.css'

const Index=({children})=>{
    const {isCollapsed}=useSelector((state)=>state.tags)
    return(
        <>
            <Row className={`${isCollapsed?'collapsed-top inside-header':'top-expand inside-header'}`}>
                <Col span={24}>
                    <Card>
                        {children}
                    </Card>
                </Col>
            </Row>
        </>
    )
}
export default Index;