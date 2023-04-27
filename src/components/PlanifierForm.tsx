import * as React from "react";
import {
  Create,
  SimpleForm,
  TextInput,
  DateTimeInput,
  NumberInput,
  SelectInput,
} from 'react-admin';
const Timezones = [
  { id: 'utc', name: 'UTC' },
  { id: 'america/los_angeles', name: 'Pacific Time (US & Canada)' },
  { id: 'america/new_york', name: 'Eastern Time (US & Canada)' },
  { id: 'europe/london', name: 'London' },
  { id: 'europe/paris', name: 'Paris' },
  { id: 'asia/tokyo', name: 'Tokyo' },
];

const PlanifierForm = (props) => {
  return (
    <SimpleForm>
    <TextInput source="subject" label="Sujet" />
    <TextInput source="description" label="Description" />
    <DateTimeInput source="start_time" label="Quand" />
    <NumberInput source="duration" label="Durée (minutes)" defaultValue={30} />
    <SelectInput source="timezone" label="Fuseau horaire" choices={Timezones} />
</SimpleForm>
  );
};

export default PlanifierForm;
