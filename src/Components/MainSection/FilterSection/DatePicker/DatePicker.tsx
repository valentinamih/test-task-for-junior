import React from 'react';
import DatePicker from 'react-date-picker';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../../redux/store';
import { filterCardsByDate, setDayFrom, setDayTo } from '../../../../redux/cardsSlice';
import './DatePicker.css';

export const DatePickerComponent: React.FunctionComponent<PropsType> = props => {
  let dispatch = useDispatch<AppDispatch>();
  let dateFrom = useSelector((state: RootState) => state.cardsReducer.dateFrom);
  let dateTo = useSelector((state: RootState) => state.cardsReducer.dateTo);
  const onDateFromChange = (e: Date) => {
    dispatch(setDayFrom(e));
    dispatch(filterCardsByDate(e));
  };
  const onDateToChange = (e: Date) => {
    dispatch(setDayTo(e));
    dispatch(filterCardsByDate(e));
  };
  return <section className={'DatePicker'}>
    <DatePicker onChange={onDateFromChange}
                className={'DatePicker-Item'}
                value={dateFrom}
                calendarIcon={null}
                clearIcon={null}
                dayPlaceholder={'от'}
                monthPlaceholder={''}
                yearPlaceholder={''}
                format={'dd MM yy'}
    />
    <div className={'DatePicker-Item Dash'}>-</div>
    <DatePicker onChange={onDateToChange}
                className={'DatePicker-Item'}
                value={dateTo}
                calendarIcon={null}
                clearIcon={null}
                dayPlaceholder={'до'}
                monthPlaceholder={''}
                yearPlaceholder={''}
                format={'dd MM yy'}
    />
  </section>;
};

type PropsType = {}