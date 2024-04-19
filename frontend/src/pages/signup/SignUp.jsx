import GenderCheckbox from "./GenderCheckbox";

const SignUp = () => {
  return (
    <div className='flex flex-col items-center justify-center  min-w-96 mx-auto'>
      <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
      <h1 className='text-3xl font-semibold text-center text-gray-300'>Sign Up  <span className='text-blue-500'>  ChatApplication</span>
      </h1>

      <form >
        <div>
      <label className='label p-2'>
            <span className='text-base label-text text-gray-300'>Full Name</span>
          </label>
          <input type='text' placeholder='Enter Full Name' className='w-full input input-bordered max-w-xs h-10' />
          </div>

          <div>
      <label className='label p-2'>
            <span className='text-base label-text text-gray-300'>User Name</span>
          </label>
          <input type='text' placeholder='Enter Username' className='w-full input input-bordered max-w-xs h-10' />
          </div>

          <div>
      <label className='label'>
            <span className='text-base label-text text-gray-300'>Password</span>
          </label>
          <input type='text' placeholder='Password' className='w-full input input-bordered max-w-xs h-10' />
          </div>
          
          <div>
      <label className='label'>
            <span className='text-base label-text text-gray-300'>Confirm Password</span>
          </label>
          <input type='text' placeholder='Confirm Password' className='w-full input input-bordered  max-w-xs h-10' />
          </div>

         <GenderCheckbox/>

          <a className='text-sm hover:underline hover:text-cyan-600 mt-2 inline-block text-gray-300' href="#">
          Already have an account ?
        </a>

        <div>
        <button className='btn btn-block btn-sm mt-2'>Sign Up</button>
        </div>

      </form>
      </div>
    </div>
  );
};

export default SignUp





// STARTER CODE FOR SIGNUP
// import GenderCheckbox from "./GenderCheckbox";

// const SignUp = () => {
//   return (
//     <div className='flex flex-col items-center justify-center  min-w-96 mx-auto'>
//       <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
//       <h1 className='text-3xl font-semibold text-center text-gray-300'>Sign Up  <span className='text-blue-500'>  ChatApplication</span>
//       </h1>

//       <form >
//         <div>
//       <label className='label p-2'>
//             <span className='text-base label-text text-gray-300'>Full Name</span>
//           </label>
//           <input type='text' placeholder='Enter Full Name' className='w-full input input-bordered max-w-xs h-10' />
//           </div>

//           <div>
//       <label className='label p-2'>
//             <span className='text-base label-text text-gray-300'>User Name</span>
//           </label>
//           <input type='text' placeholder='Enter Username' className='w-full input input-bordered max-w-xs h-10' />
//           </div>

//           <div>
//       <label className='label'>
//             <span className='text-base label-text text-gray-300'>Password</span>
//           </label>
//           <input type='text' placeholder='Password' className='w-full input input-bordered max-w-xs h-10' />
//           </div>
          
//           <div>
//       <label className='label'>
//             <span className='text-base label-text text-gray-300'>Confirm Password</span>
//           </label>
//           <input type='text' placeholder='Confirm Password' className='w-full input input-bordered  max-w-xs h-10' />
//           </div>

//          <GenderCheckbox/>

//           <a className='text-sm hover:underline hover:text-cyan-600 mt-2 inline-block text-gray-300' href="#">
//           Already have an account ?
//         </a>

//         <div>
//         <button className='btn btn-block btn-sm mt-2'>Sign Up</button>
//         </div>

//       </form>
//       </div>
//     </div>
//   );
// };

// export default SignUp