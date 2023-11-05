import { GridColDef } from '@mui/x-data-grid';
import './addModal.scss';

type Props = {
  slug: string;
  columns: GridColDef[];
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const AddModal = (props: Props) => {

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // Add new item
  };

  return (
    <div className='addModal'>
      <div className='modal'>
        <span
          className='close'
          onClick={() => {
            props.setOpen(false);
          }}
        >
          &times;
        </span>
        <h1>Add New {props.slug}</h1>
        <form onSubmit={handleSubmit}>
          {props.columns
            .filter((item) => item.field !== 'id' && item.field !== 'img')
            .map((column) => (
              <div className='item'>
                <label>{column.headerName}</label>
                <input type={column.type} placeholder={column.field} />
              </div>
            ))}
          <button>Save</button>
        </form>
      </div>
    </div>
  );
};

export default AddModal;
