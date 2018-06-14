const filteredProjects = this.props.user.userProjects.filter(
  (project) => {
    return project.projectByProjectId.name.toLowerCase()
      .indexOf(this.state.search.toLowerCase()) !== -1;
  }
);
