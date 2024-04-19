const Login = () => {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
    <div className='w-full p-6 rounded-1g shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
      <h1 className='text-3xl font-semibold text-center text-gray-300'>Login <span className='text-blue-500'> ChatApplication</span>
      </h1>

      <form>
        <div>
          <label className='label p-2'>
            <span className='text-base label-text text-gray-300'>Username</span>
          </label>
          <input type='text' placeholder='Enter Username' className='w-full input input-bordered max-w-xs h-10' />
        </div>

        <div>
           <label className='label'>
            <span className='text-base label-text text-gray-300'>Password</span>
           </label>
           <input 
            type='password'
            placeholder='Enter Password' 
            className='w-full input input-bordered max-w-xs h-10' />
        </div>
        <a href="#" className='text-sm hover:underline hover:text-cyan-600 mt-2 inline-block'>
          {"Don't"} have an account ?
        </a>

        <div>
          <button className='btn btn-block btn-sm mt-2'>Login</button>
        </div>
      </form>
    </div>
    </div>
  );
};

export default Login;



//STARTER CODE FOR THIS FILE
// const Login = () => {
//   return (
//     <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
//     <div className='w-full p-6 rounded-1g shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
//       <h1 className='text-3xl font-semibold text-center text-gray-300'>Login <span className='text-blue-500'> ChatApplication</span>
//       </h1>

//       <form>
//         <div>
//           <label className='label p-2'>
//             <span className='text-base label-text text-gray-300'>Username</span>
//           </label>
//           <input type='text' placeholder='Enter Username' className='w-full input input-bordered max-w-xs h-10' />
//         </div>

//         <div>
//            <label className='label'>
//             <span className='text-base label-text text-gray-300'>Password</span>
//            </label>
//            <input 
//             type='password'
//             placeholder='Enter Password' 
//             className='w-full input input-bordered max-w-xs h-10' />
//         </div>
//         <a href="#" className='text-sm hover:underline hover:text-cyan-600 mt-2 inline-block'>
//           {"Don't"} have an account ?
//         </a>

//         <div>
//           <button className='btn btn-block btn-sm mt-2'>Login</button>
//         </div>
//       </form>
//     </div>
//     </div>
//   );
// };

// export default Login;