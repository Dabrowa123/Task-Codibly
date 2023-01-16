function createPaginationLabel({ from, to }: any) {
  return (
    <span data-testid="pagination">
      {from}&nbsp;-&nbsp;{to - 1} of 12
    </span>
  );
}

export default createPaginationLabel;
