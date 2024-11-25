
// 入力値が空の値かどうかチェック
export const validationRequired = (value, fieldName) => {
  if (!value.trim()){
    return `${fieldName}を入力してください`;
  }
  return "";
}
