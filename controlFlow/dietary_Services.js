const checkEligibility = (role) => {
  switch (role.toLowerCase()) {
    case 'employee':
      console.log("You are an Employee and authorized to access Dietary Services.");
      break;
    case 'enrolled member':
      console.log("You are an Enrolled Member and authorized to access Dietary Services and one-on-one interaction with a dietician.");
      break;
    case 'subscriber':
      console.log("You are a Subscriber and authorized to have partial access to Dietary Services.");
      break;
    default:
      console.log("You are not an Employee, Enrolled Member, or Subscriber. Please enroll or subscribe to avail Dietary Services.");
  }
};

const userRole = prompt("Enter your role (Employee, Enrolled Member, Subscriber): ");
checkEligibility(userRole);
