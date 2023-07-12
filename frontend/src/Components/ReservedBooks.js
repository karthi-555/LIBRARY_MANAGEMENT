import React from 'react'
import './ReservedBooks.css'

function ReservedBooks() {
    return (
        <div className='reservedbooks-container'>
            <h className='reservedbooks-title'>Books On Hold</h>
            <table className='reservedbooks-table'>
                <tr>
                    <th>Name</th>
                    <th>Book</th>
                    <th>Date</th>
                </tr>
                <tr>
                    <td>Karthick T</td>
                    <td>Rich Dad Poor Dad</td>
                    <td>12/6/2023</td>
                </tr>
                <tr>
                    <td>Lokeshwaran</td>
                    <td>The Subtle Art</td>
                    <td>25/12/2022</td>
                </tr>
                <tr>
                    <td>Boomika</td>
                    <td>Python for Programmers</td>
                    <td>15/4/2023</td>
                </tr>
                <tr>
                    <td>Jaikanth</td>
                    <td>The Secret</td>
                    <td>02/1/2023</td>
                </tr>
                <tr>
                    <td>Surya</td>
                    <td>Bad Guys</td>
                    <td>21/7/2021</td>
                </tr>
                <tr>
                    <td>Dinesh</td>
                    <td>Giovanni Rovelli</td>
                    <td>02/7/2023</td>
                </tr>
            </table>
        </div>
    )
}

export default ReservedBooks
