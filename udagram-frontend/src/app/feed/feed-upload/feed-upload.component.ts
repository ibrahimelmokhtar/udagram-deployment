import { Component, OnInit } from '@angular/core';

import {
	Validators,
	FormBuilder,
	FormGroup,
	FormControl,
} from '@angular/forms';
import { FeedProviderService } from '../services/feed.provider.service';

import { LoadingController, ModalController } from '@ionic/angular';

@Component({
	selector: 'app-feed-upload',
	templateUrl: './feed-upload.component.html',
	styleUrls: ['./feed-upload.component.scss'],
})
export class FeedUploadComponent implements OnInit {
	previewDataUrl;
	file: File;
	uploadForm: FormGroup;

	constructor(
		private feed: FeedProviderService,
		private formBuilder: FormBuilder,
		private loadingController: LoadingController,
		private modalController: ModalController
	) {}

	// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
	ngOnInit() {
		this.uploadForm = this.formBuilder.group({
			caption: new FormControl('', Validators.required),
		});
	}

	// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
	setPreviewDataUrl(file: Blob) {
		const reader = new FileReader();
		// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
		reader.onloadend = () => {
			this.previewDataUrl = reader.result;
		};

		reader.readAsDataURL(file);
	}

	// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
	selectImage(event) {
		const file = event.srcElement.files;

		if (!file) {
			return;
		}
		this.file = file[0];
		this.setPreviewDataUrl(this.file);
	}

	// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
	onSubmit($event) {
		$event.preventDefault();
		this.loadingController.create();

		if (!this.uploadForm.valid || !this.file) {
			return;
		}
		this.feed
			.uploadFeedItem(this.uploadForm.controls.caption.value, this.file)
			.then(() => {
				this.modalController.dismiss();
				this.loadingController.dismiss();
			});
	}

	// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
	cancel() {
		this.modalController.dismiss();
	}
}
