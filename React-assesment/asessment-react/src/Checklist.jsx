import React, { useContext } from 'react';
import { Checklistcontext } from './CheckListContext';

const CheckList = () => {

    const { selecteditem1, selecteditem2, handleCheckBox1, handleCheckBox2 } = useContext(Checklistcontext);
    // console.log(selecteditem);

    return (
        <div>

            <div style={{
                marginBottom: "50px"
            }}>


                <h2 style={{ color: "green" }}>Are You a Citizen ? : <span style={{ color: "red" }}> {selecteditem1}</span></h2>
                <h2 style={{ color: "green" }}> Are You Over 21 ? : <span style={{ color: "red" }}> {selecteditem2}</span></h2>




            </div>


            <div>
                <label>
                    Are You a Citizen ?
                    <input type="checkbox"
                        value=""
                        onChange={() => { handleCheckBox1(event.target.checked) }}
                    />

                </label>
            </div>
            <label>
                Are You Over 21 ?
                <input type="checkbox"
                    value=""
                    onChange={() => { handleCheckBox2(event.target.checked) }}
                />

            </label>


        </div>
    );
}

export default CheckList;
