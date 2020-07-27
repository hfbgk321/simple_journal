import React, { useState, useEffect } from "react";
import axios from "axios";

// export default function SpecificJournal(props) {
//   const [SpecificJournal, setSpecificJournal] = useState([]);

//   useEffect(() => {
//     axios
//       .get(`http://localhost:2000/journal/${props.match.params.id}`)
//       .then((res) => {
//         setSpecificJournal(res.data);
//       })
//       .catch((err) => console.log(err));
//   }, [SpecificJournal]);

//   return (
//     <div>
//       <h1>{props.match.params.id}</h1>
//     </div>
//   );
// }

export default class SpecificJournal extends React.Component {
  constructor(props) {
    super(props);
    this.state = { SpecificJournal: [] };
  }

  componentDidMount() {
    axios
      .get(`http://localhost:2000/journal/${this.props.match.params.id}`)
      .then((res) => {
        this.setState({ SpecificJournal: res.data });
        console.log(this.state.SpecificJournal);
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div>
        <h1>{this.props.match.params.id}</h1>
        <h1>{this.state.SpecificJournal.author}</h1>
        <h1>{this.state.SpecificJournal.email}</h1>
        <h1>{this.state.SpecificJournal.content}</h1>
        <h1>{this.state.SpecificJournal.dateCreated}</h1>
      </div>
    );
  }
}
