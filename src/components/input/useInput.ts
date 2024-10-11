import {useState} from 'react';

export const useInput = (onChangeText: (date: Date) => void) => {
  const [date, setDate] = useState<Date | undefined>();
  const [show, setShow] = useState<boolean>(false);

  const onChange = (event: unknown, selectedDate?: Date | undefined) => {
    if (selectedDate) {
      const currentDate = selectedDate || date;
      setShow(false);
      setDate(currentDate);
    } else {
      setShow(false);
    }
  };

  const showDatepicker = () => {
    setShow(true);
  };

  const handleDateChange = (event: unknown, selectedDate?: Date) => {
    onChange(event, selectedDate);
    if (selectedDate) {
      if (onChangeText) {
        onChangeText(selectedDate);
      }
    }
  };
  return {
    date,
    show,
    showDatepicker,
    handleDateChange,
  };
};
