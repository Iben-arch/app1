import React from "react";

export default function FormSelectFile(){
    const inputfile = React.useRef()
    const selectMaxNumFiles = React.useRef()
    const  selectMaxSize = React.useRef()

    let maxNumfiles = [1,2,3,4,5]
    let maxSizefiles = [50,100,200,500,1000]

    const onClickButton = () => {
        let maxNumFiles = selectMaxNumFiles.current.value
        let maxSize = selectMaxSize.current.value

        if(inputfile.current.files.lenght > maxNumFiles){
            alert(`เลือกได้ไม่เกิน ${maxNumFiles} ไฟล์`)
            return
        }
        for (let f of inputfile.current.files) {
            if (f.size > maxSize * 1000) {
                alert(`ขนาดของแต่ละไฟล์ต้องไม่เกิน ${maxSize} KB`)
                return
            }
        }
        alert('Files OK')
    }

    return(
        <div className="mt-4 mx-auto p-3 rounded" style={{width:'400px', background:'#cee'}}>
            <form>
                <div className="form-group mb-3">
                    <label htmlFor="maxNumFiles" className="form-label">จำนวนไฟล์สูงสุด</label>
                        <select id="" className="form-select form-select-sm" ref={selectMaxNumFiles}>
                        {
                            maxNumfiles.map(i => {
                                return <option value={i}>{i}</option>
                            })
                        }
                        </select>
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="maxSize" className="form-label">ขนาดไฟล์สูงสุด (KB)</label>
                    <select id="maxFileSize" className="form-select form-select-sm" ref={selectMaxSize}>
                        {
                            maxSizefiles.map(i =>{
                                return <option value={i}>{i}</option>
                            })  
                        }
                    </select>
                </div>
                <div className="text-group mb-3">
                        <label htmlFor="file" className="form-label">เลือกไฟล์</label>
                        <input type="file" id="file" accept="image/" className="form-control form-control-sm" ref={inputfile} multiple></input>
                </div>
                <div className="text-center mt-4">
                    <button type="button" className="btn btn-sm btn-primary" onClick={onClickButton}>OK</button>
                </div>
            </form>
        </div>
        
    )
}