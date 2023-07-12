import React from 'react'
import './News.css'

function News() {
    return (
        <div className='news-container'>
            <h className='news-title'>Updates for You</h>
            <div className='news-data'>
                <div className='news-empty'></div>
                <div>
                    <h1 className='news-subtitle'>Competitions</h1>
                    <div>
                        <div className='news-competition-event'>
                            <p>Competion-1</p>
                            <p>Teen Read-A-Thon:This competition is open to teens of all ages. Participants read as many books as they can during a set period of time. The teen who reads the most books wins the competition.</p>
                        </div>
                        <div className='news-competition-event'>
                            <p>Competion-2</p>
                            <p>Library Design Competition: This competition is open to architects and designers from all over the world. 
							The winning design is used to create a new library building.</p>
                        </div>
                        <div className='news-competition-event'>
                            <p>Competion-3</p>
                            <p>Book Trailer Competition: This competition is open to students of all ages. Participants create a book trailer for a book they have read. The winning trailer is used to promote the book.</p>
                        </div>
                        <div className='news-competition-event'>
                            <p>Competion-4</p>
                            <p>Bookmark Design Competition:Participants design a bookmark for a book they have read. The winning bookmark is used to promote the book.</p>
                        </div>
                        <div className='news-competition-event'>
                            <p>Competion-5</p>
                            <p>Poetry Slam: This competition is open to poets of all ages. Participants perform their poems in front of a panel of judges. The poet who receives the highest score wins the competition.</p>
                        </div>
                    </div>
                </div>
                <div className='news-empty'></div>
                <div>
                    <h1 className='news-subtitle'>Online Quiz</h1>
                    <div>
                        <div className='news-quiz-event'>
                            <p>Quiz-1</p>
                            <p>Library Research Skills Test</p>
                        </div>
                        <div className='news-quiz-event'>
                            <p>Quiz-2</p>
                            <p>Library Trivia Quiz</p>
                        </div>
                        <div className='news-quiz-event'>
                            <p>Quiz-3</p>
                            <p>Digital Library Quiz</p>
                        </div>
                        <div className='news-quiz-event'>
                            <p>Quiz-4</p>
                            <p>Library and Information Science Quiz</p>
                        </div>
                        <div className='news-quiz-event'>
                            <p>Quiz-5</p>
                            <p>Library of Congress Quiz by The Library of Congress</p>
                        </div>
                    </div>
                </div>
                <div className='news-empty'></div>
            </div>
        </div>
    )
}

export default News
