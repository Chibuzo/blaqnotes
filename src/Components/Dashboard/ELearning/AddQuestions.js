import React from "react";

const AddQuestions = () => {
    return (
        <div className="row">
            <div className="col-sm-12">
                <section className="panel">
                    <header className="panel-heading">
                        Add Questions
                    </header>

                    <div className="panel-body">
                        <br />
                        <form action="/gqtest/savequestion" method="post" id="form-update-question" enctype="multipart/form-data">
                            <div id="manual-question">
                                <div className="form-group">
                                    <label>Question 1</label>
                                    <textarea name="question" id="_question" rows="4" className="form-control editor"></textarea>
                                </div>

                                <div className="question-image"></div>

                                <div className="form-group">
                                    <label>Question Image</label><br />
                                    <button type="button" className="btn btn-fill btn-default" id="_attach-file">Attach Image file</button>
                                </div>

                                <div className="form-group">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Option A</label>
                                            <input type="text" name="opt_a" id="opt-a" className="form-control" placeholder="Option A" />
                                        </div>
                                        <div className="col-md-6">
                                            <label>Option B</label>
                                            <input type="text" name="opt_b" id="opt-b" className="form-control" placeholder="Option B" />
                                        </div>
                                    </div>
                                </div>    
                                <div className="form-group">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Option C</label>
                                            <input type="text" name="opt_c" id="opt-c" className="form-control" placeholder="Option C" />
                                        </div>
                                        <div className="col-md-6">
                                            <label>Option D</label>
                                            <input type="text" name="opt_d" id="opt-d" className="form-control" placeholder="Option D" />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Option E</label>
                                            <input type="text" name="opt_e" id="opt-e" className="form-control" placeholder="Option E" />
                                        </div>
                                        <div className="col-md-6">
                                            <label>Answer</label>
                                            <select name="answer" id="_answer" className="form-control" required>
                                                <option value="">-- Choose Answer --</option>
                                                <option value="A">A</option>
                                                <option value="B">B</option>
                                                <option value="C">C</option>
                                                <option value="D">D</option>
                                                <option value="E">E</option>
                                            </select>
                                        </div>
                                        <div className="col-md-6"></div>
                                    </div>
                                    <input type="hidden" name="test_id" id="_test_id" />
                                    <input type="hidden" name="question_id" id="_question_id" />
                                    <input type="hidden" name="image_file" id="image-file" />
                                    <input type="file" name="question_image" id="_question_image" className="form-control-file hidden" />
                                </div>
                                <div className="form-group">
                                    <button type="button" className="btn btn-danger hidden" id="delete-question"><i className="fa fa-trash-o"></i>&nbsp; Delete Question </button>
                                    <button type="submit" className="btn btn-primary pull-right btn-lg" id="update-question"> &nbsp; Update Question </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default AddQuestions;