function createPaginationLabel({ from, to }: any) {
  return (
    <>
      {from}&nbsp;-&nbsp;{to - 1} of 12
    </>
  );
}

export default createPaginationLabel;
