const GenderCheckbox = ({onCheckboxChange,selectedGender}) => {
  return (
    <div className='flex'>
        <div className='form-control'>
          <label className={`label gap-2 cursor-pointer ${selectedGender === "male" ? "selected" : ""}`}>
            <span className='label-text text-gray-300'>Male</span>
           <input type="checkbox" className='checkbox text-gray-300 border-slate-300' 
           checked={selectedGender ===  "male"}
           onChange={() => onCheckboxChange("male")}
           />
          </label>
        </div>
         <div className='form-control'>
         <label className={`label gap-2 cursor-pointer ${selectedGender === "female" ? "selected" : ""}`}>
            <span className='label-text text-gray-300'>Female</span>
           <input type="checkbox" className='checkbox text-gray-300 border-slate-300'
             checked={selectedGender ===  "female"}
             onChange={() => onCheckboxChange("female")}
            />
          </label>
         </div>
    </div>
  );
};

export default GenderCheckbox;


//STARTER CODE FOR GENDER
// const GenderCheckbox = () => {
//     return (
//       <div className='flex'>
//           <div className='form-control'>
//             <label className={'label gap-2 cursor-pointer'}>
//               <span className='label-text text-gray-300'>Male</span>
//              <input type="checkbox" className='checkbox text-gray-300 border-slate-300' />
//             </label>
//           </div>
//            <div className='form-control'>
//            <label className={'label gap-2 cursor-pointer'}>
//               <span className='label-text text-gray-300'>Female</span>
//              <input type="checkbox" className='checkbox text-gray-300 border-slate-300' />
//             </label>
//            </div>
//       </div>
//     );
//   };
  
//   export default GenderCheckbox;