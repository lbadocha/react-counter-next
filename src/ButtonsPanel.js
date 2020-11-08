
const ButtonsPanel = props => {

    return (
        <div className="buttons-panel">
            <button onClick={()=>props.changeValueMethod('add')}>Add 1</button>
            <button onClick={()=>props.changeValueMethod('init')}>InitValue</button>
            <button onClick={()=>props.changeValueMethod('reset')}>Set 0</button>
        </div>
    );
}

export default ButtonsPanel;