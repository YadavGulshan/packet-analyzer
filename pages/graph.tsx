import { GraphAnalysis } from '../components/Graph/Graph';
const Graph = () => {
  const styles = {
    flex: {
      display: 'flex',
      'align-items': 'center',
      height: '100vh',
    },
  };
  return (
    <>
      <div style={styles.flex}>
        <GraphAnalysis />
      </div>
    </>
  );
};

export default Graph;
