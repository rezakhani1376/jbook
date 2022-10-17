import { useAction } from '../hooks/use-actions';

interface ActionBarProps {
    id: string;
}
const ActionBar: React.FC<ActionBarProps> = ({ id }) => {
    const { moveCell, deleteCell } = useAction();

    return (
        <div>
            <button onClick={() => moveCell(id, 'up')}>Up</button>
            <button onClick={() => moveCell(id, 'down')}>Down</button>
            <button onClick={() => deleteCell(id)}>Delete</button>
        </div>
    );
};

export default ActionBar;
