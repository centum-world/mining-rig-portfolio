export const AboutIcon = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.size || "28"}
      height={props.size || "28"}
      fill={props.color || "white"}
      className="bi bi-file-person"
      viewBox="0 0 16 16"
    >
      <path d="M12 1a1 1 0 0 1 1 1v10.755S12 11 8 11s-5 1.755-5 1.755V2a1 1 0 0 1 1-1zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
      <path d="M8 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
    </svg>
  );
};

export const HomeIcon = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.size || "28"}
      height={props.size || "28"}
      fill={props.color || "white"}
      className="bi bi-house"
      viewBox="0 0 16 16"
    >
      <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z" />
    </svg>
  );
};

export const DownArrewIcon = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.size || "32"}
      height={props.size || "32"}
      fill={props.color || "currentColor"}
      className="bi bi-arrow-up-short"
      viewBox="0 0 16 16"
    >
      <path
        fill="evenodd"
        d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5"
      />
    </svg>
  );
};
