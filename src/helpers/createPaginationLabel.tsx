function createPaginationLabel({ from, to }: any) {
  return (
    <div>
      {from}&nbsp;-&nbsp;{to - 1} of 12
    </div>
  );
}

export default createPaginationLabel;
