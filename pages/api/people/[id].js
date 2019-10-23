import { people } from '../../../data';

export default (req, res) => {
  res.status(200).json(req.query);

  // const filtered = people.filter(p => p.id === req.query.id);

  // User with id exists
  // if (filtered.length > 0) {
  //
  // } else {
  //   res.status(404).json({ message: `User with id: ${id} not found.` });
  // }
};
