const myLogger = store => next => action => {
  console.log(action);
  const result = next(action); // 다음 미들웨어 또는 리듀서에게 액션 전달
  console.log('\t', store.getState());
  return result;
};

export default myLogger;