import { useDispatch } from 'react-redux';
import {changeFilter} from "../../redux/filtersSlice.js";

export default function SearchBox() {
    const dispatch = useDispatch();

    const handleChange = e => {
        dispatch(changeFilter(e.target.value));
    };

    return <input type="text" placeholder="Search" onChange={handleChange} />;
}