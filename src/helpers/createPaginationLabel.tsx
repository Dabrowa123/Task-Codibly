function createPaginationLabel({ from, to }: any) {
  return (
    <span role="pagination">
      {from}&nbsp;-&nbsp;{to - 1} of 12
    </span>
  );
}

export default createPaginationLabel;
