export const doesVoterExist = async (payload: object) => {
  const res = await fetch(
    "https://titan.csit.rmit.edu.au/~s3851781/valid_voter.php",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    }
  );

  const data = await res.json();
  return {
    success: data.status === 200,
    message: data.message,
    electorateName: data.electorate_name,
  };
}

export const hasNotPreviouslyVoted = async (payload: object) => {
  const res = await fetch(
    "https://titan.csit.rmit.edu.au/~s3851781/previously_voted.php",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    }
  );

  const data = await res.json();
  return {
    success: data.status === 200,
    message: data.message,
  };
};

export const getCandidates = async (payload: object) => {
  const res = await fetch(
    "https://titan.csit.rmit.edu.au/~s3851781/get_candidates.php",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    }
  );

  const data = await res.json();
  return data;
}

export const castVotes = async (payload: object) => {
  const res = await fetch(
    "https://titan.csit.rmit.edu.au/~s3851781/cast_votes.php",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    }
  );

  const data = await res.json();
  return data;
};