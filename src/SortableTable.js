import React, { Component } from "react";
import { Table, Button, Panel } from "react-bootstrap";
import {
  SortableContainer,
  SortableElement,
  arrayMove
} from "react-sortable-hoc";

const cols = [{ value: "col01" }, { value: "col02" }, { value: "col03" }];
const rows = [
  { col01: 1, col02: "value101", col03: "value102" },
  { col01: 2, col02: "value201", col03: "value202" },
  { col01: 3, col02: "value301", col03: "value302" },
  { col01: 4, col02: "value401", col03: "value402" },
  { col01: 5, col02: "value501", col03: "value502" },
  { col01: 6, col02: "value601", col03: "value602" },
  { col01: 7, col02: "value701", col03: "value702" },
  { col01: 8, col02: "value801", col03: "value802" },
  { col01: 9, col02: "value901", col03: "value902" },
  { col01: 10, col02: "value1001", col03: "value1002" }
];

const SortableTableBody = SortableContainer((items, idx) => {
  // console.log("idx:" + JSON.stringify(idx));
  return (
    <tbody key={`tbody-${idx}`}>
      {items.items.map((item, index) => {
        return (
          <SortableRow
            key={`sr-${index}`}
            items={item}
            idx={index}
            index={index}
          />
        );
      })}
    </tbody>
  );
});
const SortableRow = SortableElement((items, index) => {
  //console.log(items);
  // return (
  //   <tr key={`tr-${items.idx}`}>
  //     {items.items.map((item, index) => {
  //       return Object.keys(item).map((value, index) => {
  //         return <td key={`td-${index}-${item[value]}`}>{item[value]}</td>;
  //       });
  //     })}
  //   </tr>
  // console.log(index);
  return (
    <tr key={`tr-${items.idx}`}>
      {Object.keys(items.items).map((value, index) => {
        return (
          <td key={`td-${index}-${items.items[value]}`}>
            {items.items[value]}
          </td>
        );
      })}
    </tr>
  );
});

class SortableTable extends Component {
  constructor(props) {
    super(props);
    //console.log(rows);
    this.state = { items: rows };
    this.onSortEnd = this.onSortEnd.bind(this);
  }

  onSortEnd = ({ oldIndex, newIndex }) => {
    console.log("#onSortEnd!!");
    console.log(`oldIndex:${oldIndex}/newIndex:${newIndex}`);
    console.log(`before:${JSON.stringify(this.state.items)}`);
    console.log("------------------------------");
    this.setState({
      items: arrayMove(this.state.items, oldIndex, newIndex)
    });
    console.log(`after:${JSON.stringify(this.state.items)}`);
  };

  render() {
    return (
      <Panel>
        <Panel.Heading style={{ align: "left" }}>
          react-boostrap.Table and react-sortable-hoc
        </Panel.Heading>
        <Panel.Body>
          <Button
            onClick={e => alert(JSON.stringify(this.state.items))}
            bsStyle="primary"
          >
            Show Data
          </Button>
          <Table striped bordered condensed hover responsive>
            <thead>
              <tr>
                {cols.map((item, index) => (
                  <th>{item.value}</th>
                ))}
              </tr>
            </thead>
            <SortableTableBody
              items={this.state.items}
              onSortEnd={this.onSortEnd}
            />
          </Table>
        </Panel.Body>
      </Panel>
    );
  }
}
export default SortableTable;
