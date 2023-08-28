'use client'

import React from "react";
import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { getAllTodoTasksByUserId, addTodoTask, verifyToken } from '@/database/actions'
import { useRouter } from "next/navigation";
import TaskList from "../components/TaskList";
import jwt_decode from "jwt-decode";
import Header from "../components/Header";
import { dictionary } from "@/dictionaries/content";
import Modal from 'react-bootstrap/Modal';
import {Button} from 'react-bootstrap';
import {Col, Row} from "react-bootstrap";


interface todoTask {
    id?: number
    userId: number,
    content: string,
}

const dashboard = ({params}: {params: {lang: string}}) => {
    const router = useRouter();
    const [currentUserId, setCurrentUserId] = useState(0);
    const dispatch = useAppDispatch();
    const userState = useAppSelector(state=>state.user);
    // console.log(userState);
    const taskState = useAppSelector(state => state.task);
    // console.log(taskState);
    
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [count, setCount] = useState(0);
    
    // const reload=()=>window.location.reload();
    const [task, setTask] = useState('');
    
    
    useEffect(()=>{
        const token = sessionStorage.getItem("user");
        if(!token){
            return;
        }else{
            dispatch(verifyToken(token) as any);
            console.log('run this for first time');
            
        }
    },[])
    
    useEffect(()=>{
        if(userState.Verifysuccess == "error"){
            router.push("/redirect");
        }else if(userState.Verifysuccess == "success"){
            const token = sessionStorage.getItem("user");
            const decoded = jwt_decode(String(token));
            if(decoded){
                const new_currentId = Number(decoded.id);
                console.log('use temp', new_currentId);
                setCurrentUserId(new_currentId);
            }
            try{
                console.log(`current userId: `, currentUserId )
                //dispatch(getAllTodoTasksByUserId(currentUserId));                   
            } catch(err){
                console.log("error");
            }
        }
    }, [userState.Verifysuccess, currentUserId])

    useEffect(()=>{
        dispatch(getAllTodoTasksByUserId(currentUserId));
    },[currentUserId])
   

    
    const handleAddTask = () =>{
        dispatch(addTodoTask({
            name: task,
            userId: currentUserId,
        }))
    }


    return ( 
        <div style={{textAlign: "center", alignItems: "center"}}>
            <Header params={params}/>
            <h4 style={{textAlign: "end", paddingRight: "50px"}}>{dictionary [params.lang]?.greeting}</h4>
            <div className="flex items-center justify-center p-5">
                <img src="/images/img5.png" alt="" />
            </div>
            <Row className="px-5">
                <Col lg={6}>
                    <h4>{dictionary[params.lang]?.dailytask_name}</h4>
                </Col>
                <Col lg={6}>
                    <Button style={{color: 'black'}} variant="primary" onClick={handleShow}>
                        {dictionary[params.lang]?.add_name}
                    </Button>
                </Col>
            </Row>
            
            <div style={{padding: "20px 150px"}}>
                {taskState.tasks && <TaskList todoTaskList={taskState.tasks} ></TaskList> }
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Enter Task!</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{textAlign: "center"}}>
                    <input className="text-dark border-2" type="text" value={task} onChange={(e)=>setTask(e.target.value)}/>
                </Modal.Body>
                <Modal.Footer>
                    <Button className="text-dark" variant="primary" onClick={handleAddTask}>
                        {dictionary[params.lang]?.add_name}
                    </Button>
                    <Button className="text-dark" variant="secondary" onClick={handleClose}>
                        {dictionary[params.lang]?.cancel_name}
                    </Button>
                </Modal.Footer>
            </Modal>


        </div>
     );
}
 
export default dashboard;