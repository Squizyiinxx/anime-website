
import logo from '../../assets/logo.png'
const index = () => {
  return (
    <div className="fixed bg-slate-800 left-0 top-0 w-screen h-screen z-[9999] flex justify-center items-center">
      <div className="flex flex-col justify-center items-center gap-5 w-[300px]">
      <img src={logo} alt="Logo" className="w-[100px]" />
        <span className="w-full relative block h-3 rounded-full bg-slate-100 overflow-hidden">
          <span className="absolute animate-loading bg-gradient-to-br from-blue-300 bg-blue-700 block shadowLoading w-16 h-full"></span>
        </span>
      </div>
    </div>
  );
}

export default index