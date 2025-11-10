

import React, { use } from 'react';
import './body.css'; 


const Body = ({ ticketsPromise }) => {
    const ticketsData = use(ticketsPromise);
    console.log(ticketsData);
    
    const getStatusClass = (status) => {
        switch (status.toLowerCase().replace('-', ' ')) {
            case 'open':
                return 'status-open';
            case 'in-progress':
                return 'status-in-progress';
            case 'resolved': 
            default:
                return 'status-open'; 
        }
    };
    
    const getPriorityClass = (priority) => {
        switch (priority.toLowerCase().replace('-', ' ')) {
            case 'high priority':
                return 'priority-high';
            case 'medium priority':
                return 'priority-medium';
            case 'low priority':
                return 'priority-low';
            default:
                return '';
        }
    };

    return (
        <div className="main-content-wrapper"> 
            <div className="tickets-grid-container">
                {
                    ticketsData.map(ticket => (
                        <div className="ticket-card" key={ticket.id}>
                            <div className="card-header">
                                <h3 className="card-title">{ticket.title}</h3>
                                <div className={`card-status ${getStatusClass(ticket.status)}`}>
                                    {ticket.status}
                                </div>
                            </div>

                            <p className="card-description">
                                {ticket.description}
                            </p>

                            <div className="card-footer">
                                <div className="details-left">
                                    <span className="ticket-id">{ticket.id}</span>
                                    <span className={`card-priority ${getPriorityClass(ticket.priority)}`}>
                                        {ticket.priority}
                                    </span>
                                </div>
                                <div className="details-right">
                                    <span className="assignee">{ticket.customer}</span>
                                    
                                    <span className="date">📅 {ticket.createdAt}</span> 
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>

            
            <div className="task-sidebar">
                <div className="task-status-card">
                    <h3 className="sidebar-title">Task Status</h3>
                    <p className="sidebar-text">Select a ticket to add to Task Status</p>
                </div>

                <div className="resolved-task-card">
                    <h3 className="sidebar-title">Resolved Task</h3>
                    <p className="sidebar-text">No resolved tasks yet.</p>
                </div>
            </div>
        </div>
    );
};

export default Body;