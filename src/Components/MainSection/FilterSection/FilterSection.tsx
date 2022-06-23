import React from "react";
import Select from 'react-select'

export const FilterSection: React.FunctionComponent<PropsType> = props => {
  return <section className={'FilterSection'}>
    <Select />
  </section>
}

type PropsType = {}