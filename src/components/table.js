import React from 'react';
import Navbar from './navbar';
import Footer from './footer';

const OrderTable = (props) => {
    return (
        <div>
            <Navbar />
            <div className="flex justify-center items-center h-screen">
                <div className="relative overflow-x-auto shadow-2xl sm:rounded-lg p-4">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
                        <thead className="text-xs text-green-500  ">
                            <tr>
                                <th scope="col" className="px-6 text-xl py-3">
                                    Listing name
                                </th>
                                <th scope="col" className="px-6 text-xl py-3">
                                    Listing from
                                </th>
                                <th scope="col" className="px-6 text-xl py-3">
                                    Ordered by
                                </th>
                                <th scope="col" className="px-6 text-xl py-3">
                                    Quantity
                                </th>
                                <th scope="col" className="px-6 text-xl py-3">
                                    Unit Price
                                </th>
                                <th scope="col" className="px-6 text-xl py-3">
                                    Total Price
                                </th>
                                <th scope="col" className="px-6 text-xl py-3">
                                    {props.btn1ColName}
                                </th>
                                <th scope="col" className="px-6 text-xl py-3">
                                    {props.btn2ColName}
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="odd:bg-green-100 even:bg-white">
                                <td className="px-6 py-4  whitespace-nowrap ">
                                    {props.productName}
                                </td>
                                <td className="px-6 py-4">
                                    {props.SellerName}
                                </td>
                                <td className="px-6 py-4">
                                    {props.buyerName}
                                </td>
                                <td className="px-6 py-4">
                                    {props.Quantity}
                                </td>
                                <td className="px-6 py-4">
                                    {props.UnitPrice}
                                </td>
                                <td className="px-6 py-4">
                                    {props.UnitPrice * props.Quantity}
                                </td>
                                <td className="px-6 py-4">
                                    <button className="bg-green-500 hover:bg-green-800 text-white text-sm font-bold py-2 px-4 rounded-md">{props.Button1Title}</button>
                                </td>
                                <td className="px-6 py-4">
                                    <button className={`bg-${props.Btn2Color} hover:bg-${props.Btn2HoverColor} text-white text-sm font-bold py-2 px-4 rounded-md w-full`}>{props.Button2Title}</button>
                                </td>
                            </tr>
                            <tr className="odd:bg-green-100 even:bg-white">
                                <td className="px-6 py-4  whitespace-nowrap ">
                                    {props.productName}
                                </td>
                                <td className="px-6 py-4">
                                    {props.SellerName}
                                </td>
                                <td className="px-6 py-4">
                                    {props.buyerName}
                                </td>
                                <td className="px-6 py-4">
                                    {props.Quantity}
                                </td>
                                <td className="px-6 py-4">
                                    {props.UnitPrice}
                                </td>
                                <td className="px-6 py-4">
                                    {props.UnitPrice * props.Quantity}
                                </td>
                                <td className="px-6 py-4">
                                    <button className="bg-green-500 hover:bg-green-800 text-white text-sm font-bold py-2 px-4 rounded-md w-full">{props.Button1Title}</button>
                                </td>
                                <td className="px-6 py-4">
                                    <button className={`bg-${props.Btn2Color} hover:bg-${props.Btn2HoverColor} text-white text-sm font-bold py-2 px-4 rounded-md w-full`}>{props.Button2Title}</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default OrderTable;
