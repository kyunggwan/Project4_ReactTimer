function MyTime() {
  console.log("App"); // 이렇게 뭐 써도 되긴함.
  return ( //표현되는 것은 div 태그 하나
     <div className="mytime"> {new Date().toLocaleTimeString()}</div> 
  );
}

export default MyTime;
