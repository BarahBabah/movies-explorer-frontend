import { useCallback, useState } from "react";

//хук управления формой и валидации формы
function useFormWithValidation() {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const [errorText, setErrorText] = useState(""); // Добавляем состояние для текста ошибки

  // Добавляем состояние для регулярного выражения и сообщения об ошибке для email
  // const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  // const nameRegex = /^[a-zA-Zа-яЁёА-Яs-]+$/;
  const emailErrorMessage = "Введите корректный email";
  const nameErrorMessage =
    "поле должно содержать только латиницу, кириллицу, пробел или дефис";

  const errorMessages = {
    name: nameErrorMessage,
    email: emailErrorMessage,
  };

  function handleServerError(error) {
    if (error.status) {
      const status = error.status;
      switch (status) {
        case 401:
          setErrorText("Вы ввели неправильный логин или пароль.");
          break;
        // case 401:
        //   setErrorText(
        //     "При авторизации произошла ошибка. Токен не передан или передан не в том формате."
        //   );
        //   break;
        case 403:
          setErrorText(
            "При авторизации произошла ошибка. Переданный токен некорректен."
          );
          break;
        case 409:
          setErrorText("Пользователь с таким email уже существует.");
          break;
        case 500:
          setErrorText("500 На сервере произошла ошибка.");
          break;
        case 404:
          setErrorText("404 Страница по указанному маршруту не найдена.");
          break;
        default:
          setErrorText("Произошла ошибка на сервере.");
          break;
      }
    } else {
      setErrorText("Произошла ошибка при отправке запроса.");
    }
  }

  const handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    setValues({ ...values, [name]: value });
    setErrors({
      ...errors,
      [name]:
        target.validity.patternMismatch && (name === "name" || name === "email")
          ? errorMessages[name]
          : event.target.validationMessage,
    });
    setIsValid(target.closest("form").checkValidity());
    console.log(isValid);
  };

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );

  return {
    values,
    handleChange,
    errors,
    isValid,
    resetForm,
    errorText,
    setErrorText,
    handleServerError,
  };
}
export default useFormWithValidation;
