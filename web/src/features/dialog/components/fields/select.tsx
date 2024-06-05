import { MultiSelect, Select } from '@mantine/core';
import { ISelect } from '../../../../typings';
import { Control, useController } from 'react-hook-form';
import { FormValues } from '../../InputDialog';
import LibIcon from '../../../../components/LibIcon';

interface Props {
  row: ISelect;
  index: number;
  control: Control<FormValues>;
}

const SelectField: React.FC<Props> = (props) => {
  const controller = useController({
    name: `test.${props.index}.value`,
    control: props.control,
    rules: { required: props.row.required },
  });

  return (
    <>
      {props.row.type === 'select' ? (
        <Select
          styles={{ label: { color: 'white'}, input: { backgroundColor: "rgba(50, 0, 60, 0.5)", color: 'white' }, dropdown: { backgroundColor: "rgba(50, 0, 60, 0.5)", color: 'white' }, item: { color: 'white' } }}
          data={props.row.options}
          value={controller.field.value}
          name={controller.field.name}
          ref={controller.field.ref}
          onBlur={controller.field.onBlur}
          onChange={controller.field.onChange}
          disabled={props.row.disabled}
          label={props.row.label}
          description={props.row.description}
          withAsterisk={props.row.required}
          clearable={props.row.clearable}
          searchable={props.row.searchable}
          icon={props.row.icon && <LibIcon icon={props.row.icon} fixedWidth />}
        />
      ) : (
        <>
          {props.row.type === 'multi-select' && (
            <MultiSelect
              styles={{ label: { color: 'white'}, input: { backgroundColor: "rgba(50, 0, 60, 0.5)", color: 'white' } }}
              data={props.row.options}
              value={controller.field.value}
              name={controller.field.name}
              ref={controller.field.ref}
              onBlur={controller.field.onBlur}
              onChange={controller.field.onChange}
              disabled={props.row.disabled}
              label={props.row.label}
              description={props.row.description}
              withAsterisk={props.row.required}
              clearable={props.row.clearable}
              searchable={props.row.searchable}
              maxSelectedValues={props.row.maxSelectedValues}
              icon={props.row.icon && <LibIcon icon={props.row.icon} fixedWidth />}
            />
          )}
        </>
      )}
    </>
  );
};

export default SelectField;
