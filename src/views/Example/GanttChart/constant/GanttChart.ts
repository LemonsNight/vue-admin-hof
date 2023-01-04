// import { gantt } from "dhtmlx-gantt";
// const config = function ({ domInstance }) {
//   return {
//     refName: "ganttRef",
//     domInstance,
//     init() {
//       gantt.init(domInstance);
//       gantt.parse({
//         data: [
//           {
//             id: 1,
//             text: "Project #2",
//             start_date: "01-04-2018",
//             duration: 18,
//             progress: 0.4,
//             open: true,
//           },
//           {
//             id: 2,
//             text: "Task #1",
//             start_date: "02-04-2018",
//             duration: 8,
//             progress: 0.6,
//             parent: 1,
//           },
//           {
//             id: 3,
//             text: "Task #2",
//             start_date: "11-04-2018",
//             duration: 8,
//             progress: 0.6,
//             parent: 1,
//           },
//         ],
//         links: [
//           { id: 1, source: 1, target: 2, type: "1" },
//           { id: 2, source: 2, target: 3, type: "0" },
//         ],
//       });
//     },
//   };
// };
//
// export { config };
