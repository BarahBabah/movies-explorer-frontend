import { useCallback, useState } from "react";

//хук управления формой и валидации формы
function useFormWithValidation() {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  // Добавляем состояние для регулярного выражения и сообщения об ошибке для email
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const emailErrorMessage = "Введите корректный email";

  const handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: target.validationMessage });

    // Проверяем email на соответствие регулярному выражению и обновляем ошибку
    if (name === "email") {
      const isValidEmail = emailRegex.test(value);
      setErrors({ ...errors, [name]: isValidEmail ? "" : emailErrorMessage });
    }

    setIsValid(target.closest("form").checkValidity());
  };

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );

  return { values, handleChange, errors, isValid, resetForm };
}
export default useFormWithValidation;
